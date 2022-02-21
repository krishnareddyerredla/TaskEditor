using System;
using System.ComponentModel.DataAnnotations;

namespace TaskEditorApi.Core.Entities
{
    /// <summary>
    /// An entity to hold Task information.
    /// Since Task is a reserved word I had to name this as TaskItem.
    /// </summary>
    public class TaskItem
    {
        [Key]
        public int TaskId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public DateTime CreatedDate { get; set; }


        [Required]
        public DateTime ModifiedDate { get; set; }

        [Required]
        public int Status { get; set; }
    }
}
