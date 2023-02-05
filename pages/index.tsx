import { Icon } from '@/components/___Atoms/Icon'

const TestComponent = tw.div`text-2xl`
export default function Home() {
  return (
    <div tw="bg-black text-white flex">
      Home
      <Icon name="ChevronDown" />
      <TestComponent>Test</TestComponent>
    </div>
  )
}
