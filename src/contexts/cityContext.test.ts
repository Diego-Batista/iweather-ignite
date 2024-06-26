import { renderHook } from '@testing-library/react-native'

import { CityProvider } from '@contexts/CityContext'
import { useCity } from '@hooks/useCity'

describe('Context: cityContext', () => {
  it('should be change selected city',  () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider })
    console.log(result.current)
  })
})