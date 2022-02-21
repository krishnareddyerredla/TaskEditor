using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using TaskEditorApi.Core.Entities;

namespace TaskEditorApi.Core.Interfaces
{
    public interface ITaskItemRepository 
    {
        Task<TaskItem> GetById(int id);
        Task<IEnumerable<TaskItem>> GetAll();
        Task<TaskItem> Add(TaskItem entity);
        Task<bool> Update(TaskItem entity);
        Task<bool> Any(Expression<Func<TaskItem, bool>> predicate);
    }
}
