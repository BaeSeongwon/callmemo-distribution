import { getActiveProfile } from '../sites/active'

export function useSiteProfile() {
  return getActiveProfile()
}
