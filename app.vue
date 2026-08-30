<script setup lang="ts">
import { ORGANIZATION_INFO } from '~/constants/content'

// JSON-LD NonProfitOrganization structured data
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  'name': ORGANIZATION_INFO.name,
  'alternateName': 'FIBA',
  'slogan': ORGANIZATION_INFO.slogan,
  'description': ORGANIZATION_INFO.mission,
  'url': 'https://fundacionfiba.org',
  'logo': 'https://fundacionfiba.org/images/logo-fiba.svg',
  'taxID': ORGANIZATION_INFO.legalRuc,
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': ORGANIZATION_INFO.contact.address,
    'addressLocality': ORGANIZATION_INFO.contact.city,
    'addressCountry': 'PA'
  },
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': ORGANIZATION_INFO.contact.phone,
    'contactType': 'customer support',
    'email': ORGANIZATION_INFO.contact.email,
    'availableLanguage': ['Spanish']
  },
  'sameAs': ORGANIZATION_INFO.socialLinks.map(s => s.url)
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(organizationSchema)
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
