import './App.css';
import Icons from './Icons';

function App() {
	return (
		<div className='app'>
			<div className='container'>
				<h1>To-Do List</h1>

				<div className='add-form-block'>
					<form className='add-form'>
						<input type='text' name='new-task-name' className='add-form__input' placeholder="Add new task" />
						<button type='submit' className='add-form__submit'>Add</button>
					</form>
				</div>

				<div className='todo'>
					<ul className='todo__list'>
						<li className='todo__element'>
							<div className='todo__content'>
								<input type='checkbox' className='todo__checkbox' />
								<span className='todo__title'>Buy smth</span>
							</div>

							<button className='todo__remove'>
								<Icons name='bin' className='todo__remove-icon' />
							</button>
						</li>

						<li className='todo__element done'>
							<div className='todo__content'>
								<input type='checkbox' checked className='todo__checkbox' />
								<span className='todo__title'>Buy smth</span>
							</div>

							<button className='todo__remove'>
								<Icons name='bin' className='todo__remove-icon' />
							</button>
						</li>

						<li className='todo__element'>
							<div className='todo__content'>
								<input type='checkbox' className='todo__checkbox' />
								<span className='todo__title'>Buy smth</span>
							</div>

							<button className='todo__remove'>
								<Icons name='bin' className='todo__remove-icon' />
							</button>
						</li>

						<li className='todo__element'>
							<div className='todo__content'>
								<input type='checkbox' className='todo__checkbox' />
								<span className='todo__title'>Buy smth</span>
							</div>

							<button className='todo__remove'>
								<Icons name='bin' className='todo__remove-icon' />
							</button>
						</li>

						<li className='todo__element'>
							<div className='todo__content'>
								<input type='checkbox' className='todo__checkbox' />
								<span className='todo__title'>Buy smth</span>
							</div>

							<button className='todo__remove'>
								<Icons name='bin' className='todo__remove-icon' />
							</button>
						</li>
					</ul>
				</div>


			</div>
		</div>
	);
}

export default App;
