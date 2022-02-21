using System;
using System.Linq.Expressions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using TaskEditorApi.Core.Entities;
using TaskEditorApi.Core.Interfaces;
using TaskEditorApi.Core.Services;

namespace TaskEditorCore.Tests
{
    [TestClass]
    public class TaskItemServiceTests
    {
        private readonly TaskItemService _taskItemService;

        private readonly Mock<ITaskItemRepository> _taskItemRepository;

        public TaskItemServiceTests()
        {
            _taskItemRepository = new Mock<ITaskItemRepository>();

            _taskItemService = new TaskItemService(_taskItemRepository.Object);
        }

        [TestMethod]
        public void GetAll_Should_Call_GetAll_On_Repository()
        {
            _taskItemRepository.Setup(x=>x.GetAll()).Verifiable();

            _taskItemService.GetAll();

            _taskItemRepository.Verify(x => x.GetAll(), Times.Once);
        }

        [TestMethod]
        public void GetById_Should_Call_GetById_On_Repository()
        {
            _taskItemRepository.Setup(x => x.GetById(1)).Verifiable();

            _taskItemService.GetById(1);

            _taskItemRepository.Verify(x => x.GetById(1), Times.Once);
        }

        [TestMethod]
        public void Add_Should_Call_Add_On_Repository()
        {
            var taskItem = new TaskItem();

            _taskItemRepository.Setup(x => x.Add(taskItem)).Verifiable();

            _taskItemService.Add(taskItem);

            _taskItemRepository.Verify(x => x.Add(taskItem), Times.Once);
        }

        [TestMethod]
        public void Update_Should_Call_Update_On_Repository()
        {
            var taskItem = new TaskItem();

            _taskItemRepository.Setup(x => x.Update(taskItem)).Verifiable();

            _taskItemService.Update(taskItem);

            _taskItemRepository.Verify(x => x.Update(taskItem), Times.Once);
        }

        [TestMethod]
        public void TaskItemExists_Should_Return_True_Given_Any_On_Repository_Returns_True()
        {
            var taskItem = new TaskItem();

            _taskItemRepository.Setup(x => x.Any(It.IsAny<Expression<Func<TaskItem, bool>>>())).ReturnsAsync(true);

            var result = _taskItemService.TaskItemExists(1).Result;

            Assert.IsTrue(result);
            _taskItemRepository.Verify(x => x.Any(It.IsAny<Expression<Func<TaskItem, bool>>>()), Times.Once);
        }

        [TestMethod]
        public void TaskItemExists_Should_Return_False_Given_Any_On_Repository_Returns_False()
        {
            var taskItem = new TaskItem();

            _taskItemRepository.Setup(x => x.Any(It.IsAny<Expression<Func<TaskItem, bool>>>())).ReturnsAsync(false);

            var result = _taskItemService.TaskItemExists(1).Result;

            Assert.IsFalse(result);
            _taskItemRepository.Verify(x => x.Any(It.IsAny<Expression<Func<TaskItem, bool>>>()), Times.Once);
        }
    }
}
