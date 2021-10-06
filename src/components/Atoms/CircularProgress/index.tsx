import { CircularProgress as ChakraCircularProgress } from "@chakra-ui/progress"

export function CircularProgress() {
  return (
    <ChakraCircularProgress
      isIndeterminate
      color="var(--primary)"
      mt="40"
      alignSelf="center"
    />
  )
}
