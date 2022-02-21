using System.Collections.Generic;
using System.Threading.Tasks;
using TaskEditorApi.Core.Entities;

namespace TaskEditorApi.Core.Interfaces
{
    public interface ITaskItemService 
    {
        Task<TaskItem> GetById(int id);
        Task<IEnumerable<TaskItem>> GetAll();
        Task<TaskItem> Add(TaskItem entity);
        Task<bool> Update(TaskItem entity);
        Task<bool> TaskItemExists(int id);
    }
}
