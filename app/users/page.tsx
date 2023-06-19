import EmptyState from '@/components/EmptyState'

type Props = {}

const Users = (props: Props) => {
  return (
    <div className="hidden h-full lg:block lg:pl-80">
      <EmptyState />
    </div>
  )
}

export default Users