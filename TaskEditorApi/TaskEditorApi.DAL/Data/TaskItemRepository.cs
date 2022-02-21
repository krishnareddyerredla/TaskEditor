using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TaskEditorApi.Core.Entities;
using TaskEditorApi.Core.Interfaces;
using TaskEditorApi.Dal.Data.Context;

namespace TaskEditorApi.Dal.Data
{
    public class TaskItemRepository: ITaskItemRepository
    {
        private readonly TaskEditorContext _dbContext;

        public TaskItemRepository(TaskEditorContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<TaskItem> GetById(int id)
        {
            return await _dbContext.TaskItems.FindAsync(id);
        }

        public async Task<IEnumerable<TaskItem>> GetAll()
        {
            return await _dbContext.TaskItems.ToListAsync();
        }

        public async Task<TaskItem> Add(TaskItem entity)
        {
            _dbContext.TaskItems.Add(entity);
            await _dbContext.SaveChangesAsync();

            return entity;
        }

        public async Task<bool> Any(Expression<Func<TaskItem, bool>> predicate)
        {
            return await _dbContext.TaskItems.AnyAsync(predicate);
        }

        public async Task<bool> Update(TaskItem entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            return await _dbContext.SaveChangesAsync() >= 0;
        }
    }
}