import { ref, computed } from 'vue'
import { DONATION_CONFIG } from '~/constants/content'
import type { DonationDetails } from '~/types/content'

export const useDonationInfo = () => {
  const donationInfo = computed<DonationDetails>(() => DONATION_CONFIG)
  const copiedKey = ref<string | null>(null)
  let resetTimer: ReturnType<typeof setTimeout> | null = null

  const copyToClipboard = async (text: string, keyName: string): Promise<boolean> => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(text)
        copiedKey.value = keyName
        if (resetTimer) clearTimeout(resetTimer)
        resetTimer = setTimeout(() => {
          copiedKey.value = null
        }, 2500)
        return true
      }
      return false
    } catch {
      return false
    }
  }

  const getWhatsAppDonationUrl = (): string => {
    const phone = DONATION_CONFIG.whatsapp.phoneNumber
    const message = encodeURIComponent(DONATION_CONFIG.whatsapp.defaultMessage)
    return `https://wa.me/${phone}?text=${message}`
  }

  return {
    donationInfo,
    copiedKey,
    copyToClipboard,
    getWhatsAppDonationUrl
  }
}
