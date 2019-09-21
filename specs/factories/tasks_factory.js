function fourTasks() {
  return [
    {
      name: 'Header bar needs to fill screen',
      description: 'Header bar is showing some of the background on the left side of the screen.  Needs to fill space',
      priority: 'Medium',
      status: 'Closed',
      taskId: '1',
    },
    {
      name: 'Filter calls returning incorrect values for custom date range',
      description: 'Limiting to a single month is showing values for upcoming month as well',
      priority: 'Medium',
      status: 'Open',
      taskId: '2',
    },
    {
      name: 'Add organize by column feature for list',
      description: 'Clicking on a column should organize by that column and re-load the list',
      priority: 'High',
      status: 'Open',
      taskId: '3',
    },
    {
      name: 'Add delete button feature to task list',
      description: 'An ex on the side of the task should allow for the task to be removed',
      priority: 'High',
      status: 'In Progress',
      taskId: '4',
    },];
}

export default fourTasks
