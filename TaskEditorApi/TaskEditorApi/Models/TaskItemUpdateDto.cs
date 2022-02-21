using System;
using System.ComponentModel.DataAnnotations;
using TaskEditorApi.Models.enums;

namespace TaskEditorApi.Models
{
    public class TaskItemUpdateDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public TaskItemStatus Status { get; set; }
        
    }
}