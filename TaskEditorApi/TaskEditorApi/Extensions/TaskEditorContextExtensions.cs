using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskEditorApi.Core.Entities;
using TaskEditorApi.Dal.Data.Context;
using TaskEditorApi.Models.enums;

namespace TaskEditorApi.Extensions
{
    public static class TaskEditorContextExtensions
    {
        public static void SeedDataForContext(this TaskEditorContext context)
        {
            if (context.TaskItems.Any())
            {
                return;
            }

            // init seed data
            var taskItems = new List<TaskItem>()
            {
                new TaskItem()
                {
                    Name = "Rebuild Server ABC",
                    Description = "Lorem Ipsum",
                    CreatedDate = DateTime.Now,
                    Status = Convert.ToInt32(TaskItemStatus.InProgress)
                }, new TaskItem()
                {
                    Name = "Review UPS Test Plan",
                    Description = "UT labore",
                    CreatedDate = DateTime.Now,
                    Status = Convert.ToInt32(TaskItemStatus.InProgress)
                }
            };

            context.TaskItems.AddRange(taskItems);
            context.SaveChanges();
        }
    }
}
