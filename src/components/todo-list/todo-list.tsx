import { TodoItem } from 'components/todo'
import { useFilter } from 'hooks/useFilter'
import { useTodoStore } from 'store/todo.store'

const TodoList = () => {
	const { filteredTodos } = useFilter()
	const { filterStatus } = useTodoStore(state => state)
	return (
		<div className='w-full'>
			{!filteredTodos.length && (
				<div className='text-center mt-32  flex flex-col items-center justify-center '>
					<img src='./detective.png' alt='no-tasks' />
					<h3 className='dark:text-base-white'>
						No{' '}
						{filterStatus === 'All' ? (
							''
						) : (
							<span
								className={`${
									filterStatus === 'Incompleted'
										? 'text-primary'
										: 'text-green-600'
								}`}
							>
								{filterStatus}
							</span>
						)}{' '}
						task found
					</h3>
				</div>
			)}
			{filteredTodos?.map(todo => (
				<TodoItem {...todo} />
			))}
		</div>
	)
}

export { TodoList }
