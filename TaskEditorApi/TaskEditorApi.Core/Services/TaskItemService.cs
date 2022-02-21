using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskEditorApi.Core.Entities;
using TaskEditorApi.Core.Interfaces;

namespace TaskEditorApi.Core.Services
{
    public class TaskItemService : ITaskItemService
    {
        private readonly ITaskItemRepository _taskItemRepository;

        public TaskItemService(ITaskItemRepository taskItemRepository)
        {
            _taskItemRepository = taskItemRepository;
        }

        public Task<TaskItem> GetById(int id)
        {
            return _taskItemRepository.GetById(id);
        }

        public Task<IEnumerable<TaskItem>> GetAll()
        {
            return _taskItemRepository.GetAll();
        }

        public Task<TaskItem> Add(TaskItem taskItem)
        {
            taskItem.CreatedDate = DateTime.UtcNow;
            taskItem.ModifiedDate = DateTime.UtcNow;
            return _taskItemRepository.Add(taskItem);
        }

        public Task<bool> Update(TaskItem taskItem)
        {
            taskItem.ModifiedDate = DateTime.UtcNow;
            return _taskItemRepository.Update(taskItem);
        }

        public Task<bool> TaskItemExists(int id)
        {
            return _taskItemRepository.Any(ti => ti.TaskId == id);
        }
    }
}
