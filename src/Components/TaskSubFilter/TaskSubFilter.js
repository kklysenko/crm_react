import React from 'react';

const TaskSubFilter = () => {
	return(
		<div className="TaskSubFilter">
			<input type="search" className="input TaskSubFilter-search"/>
			<div className="TaskSubFilter-checkboxes">
				<label className="label TaskSubFilter-checkboxLabel">
					<input type="checkbox" className="input TaskSubFilter-checkbox"/>
				</label>
				<label className="label TaskSubFilter-checkboxLabel">
					<input type="checkbox" className="input TaskSubFilter-checkbox"/>
				</label>
				<label className="label TaskSubFilter-checkboxLabel">
					<input type="checkbox" className="input TaskSubFilter-checkbox"/>
				</label>
			</div>
			<div className="account">
				<div className="account-name">Konstantin Lysenko</div>
			</div>
		</div>
	)
}

export default TaskSubFilter;