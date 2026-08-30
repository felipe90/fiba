import { computed } from 'vue'
import { IMPACT_METRICS } from '~/constants/content'
import type { ImpactMetric } from '~/types/content'

export const useImpactMetrics = () => {
  const metrics = computed<ImpactMetric[]>(() => IMPACT_METRICS)

  const formatMetricDisplay = (metric: ImpactMetric): string => {
    const formattedNum = new Intl.NumberFormat('es-PA').format(metric.value)
    return `${metric.prefix ?? ''}${formattedNum}${metric.suffix ?? ''}`
  }

  return {
    metrics,
    formatMetricDisplay
  }
}
