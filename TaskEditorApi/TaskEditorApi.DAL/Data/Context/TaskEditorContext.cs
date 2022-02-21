using Microsoft.EntityFrameworkCore;
using TaskEditorApi.Core.Entities;

namespace TaskEditorApi.Dal.Data.Context
{
    public sealed class TaskEditorContext : DbContext
    {
        public TaskEditorContext(DbContextOptions<TaskEditorContext> options): base(options)
        {
            Database.Migrate();
        }

        public DbSet<TaskItem> TaskItems { get; set; }
    }
}
