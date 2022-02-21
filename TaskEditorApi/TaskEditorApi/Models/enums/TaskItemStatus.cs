using System.Runtime.Serialization;

namespace TaskEditorApi.Models.enums
{
    public enum TaskItemStatus
    {
        [EnumMember(Value = "Not Started")]
        NotStarted =1,
        [EnumMember(Value = "In Progress")]
        InProgress =2,
        Complete=3
    }
}