using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using TaskEditorApi.Models.enums;

namespace TaskEditorApi.Models
{
    public class TaskItemDto
    {
        public int TaskId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public TaskItemStatus Status { get; set; }
    }
}
