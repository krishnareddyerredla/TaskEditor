using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using TaskEditorApi.Controllers;
using TaskEditorApi.Core.Entities;
using TaskEditorApi.Core.Interfaces;
using TaskEditorApi.Models;
using TaskEditorApi.Models.enums;

namespace TaskEditorApi.Tests
{
    [TestClass]
    public class TasksControllerTests
    {

        private TasksController _tasksController;
        private readonly Mock<ITaskItemService> _taskService;

        public TasksControllerTests()
        {
            _taskService = new Mock<ITaskItemService>();

            AutoMapper.Mapper.Reset();
            AutoMapper.Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<TaskItem, TaskItemDto>();
                cfg.CreateMap<TaskItemCreateDto, TaskItem>();
                cfg.CreateMap<TaskItemUpdateDto, TaskItem>();
            });

            _tasksController = new TasksController(_taskService.Object);
        }

        [TestMethod]
        public void Get_Should_Return_TaskItems()
        {
            _taskService.Setup(x=>x.GetAll()).ReturnsAsync(new List<TaskItem>
            {
                new TaskItem
                {
                    TaskId=1,
                    Name = "123",
                    CreatedDate = DateTime.Today,
                    Status = (int)TaskItemStatus.InProgress,
                    ModifiedDate = DateTime.Today
                }
            }).Verifiable();

            var result = _tasksController.Get().Result as OkObjectResult;

            Assert.AreEqual(200, result.StatusCode);
            Assert.IsNotNull(result.Value);

            var tasks = result.Value as List<TaskItemDto>;

            Assert.AreEqual(1, tasks.Count);
            Assert.AreEqual(1, tasks[0].TaskId);
            Assert.AreEqual("123", tasks[0].Name);
            Assert.AreEqual(DateTime.Today, tasks[0].CreatedDate);
            Assert.AreEqual(DateTime.Today, tasks[0].ModifiedDate);
            Assert.AreEqual(TaskItemStatus.InProgress, tasks[0].Status);

            _taskService.Verify(x => x.GetAll(), Times.Once);
        }

        [TestMethod]
        public void GetById_Should_Return_TaskItem_With_Given_Id()
        {
            _taskService.Setup(x => x.GetById(1)).ReturnsAsync(
                new TaskItem
                {
                    TaskId=1,
                    Name = "123",
                    CreatedDate = DateTime.Today,
                    Status = (int)TaskItemStatus.InProgress,
                    ModifiedDate = DateTime.Today
                }
            ).Verifiable();

            var result = _tasksController.GetById(1).Result as OkObjectResult;

            Assert.AreEqual(200, result.StatusCode);
            Assert.IsNotNull(result.Value);

            var task = result.Value as TaskItemDto;

            Assert.AreEqual(1, task.TaskId);
            Assert.AreEqual("123", task.Name);
            Assert.AreEqual(DateTime.Today, task.CreatedDate);
            Assert.AreEqual(DateTime.Today, task.ModifiedDate);
            Assert.AreEqual(TaskItemStatus.InProgress, task.Status);
        }

        [TestMethod]
        public void GetById_Should_Return_NotFound_Given_Id_That_DoesNotExist()
        {
            var result = _tasksController.GetById(1).Result as NotFoundResult;

            Assert.AreEqual(404, result.StatusCode);
        }

        [TestMethod]
        public void Post_Should_Return_BadRequest_Given_TaskItem_That_IsNull()
        {
            var result = _tasksController.Post(null).Result as BadRequestResult;

            Assert.AreEqual(400, result.StatusCode );
        }

        [TestMethod]
        public void Post_Should_Return_Created_Given_Valid_TaskItem()
        {
            var result = _tasksController.Post(new TaskItemCreateDto()).Result as CreatedAtRouteResult;

            Assert.AreEqual(201, result.StatusCode);
        }

        [TestMethod]
        public void Put_Should_Return_NotFound_Given_TaskItem_DoesNot_Exist()
        {
            var result = _tasksController.Put(1, new TaskItemUpdateDto()).Result as NotFoundResult;

            Assert.AreEqual(404, result.StatusCode);
        }

        [TestMethod]
        public void Put_Should_Return_BadRequest_Given_null_TaskItem()
        {
            var result = _tasksController.Put(1, null).Result as BadRequestResult;

            Assert.AreEqual(400, result.StatusCode);
        }

        [TestMethod]
        public void Put_Should_Return_NoContent_Given_valid_TaskItem_to_Update()
        {
            var taskItem = new TaskItemUpdateDto
            {
                Description = "121",
                Name = "121",
                Status = TaskItemStatus.InProgress
            };

            _taskService.Setup(x => x.GetById(1)).ReturnsAsync(
                new TaskItem
                {
                    TaskId = 1,
                    Name = "123",
                    CreatedDate = DateTime.Today,
                    Status = (int)TaskItemStatus.InProgress,
                    ModifiedDate = DateTime.Today
                }
            ).Verifiable();

            _taskService.Setup(x => x.Update(It.IsAny<TaskItem>())).ReturnsAsync(true);

            var result = _tasksController.Put(1, taskItem).Result as NoContentResult;

            Assert.AreEqual(204, result.StatusCode);
        }

        [TestMethod]
        public void Put_Should_Return_InternalServerError_Given_An_Error_In_Service()
        {
            var taskItem = new TaskItemUpdateDto
            {
                Description = "121",
                Name = "121",
                Status = TaskItemStatus.InProgress
            };

            _taskService.Setup(x => x.GetById(1)).ReturnsAsync(
                new TaskItem
                {
                    TaskId = 1,
                    Name = "123",
                    CreatedDate = DateTime.Today,
                    Status = (int)TaskItemStatus.InProgress,
                    ModifiedDate = DateTime.Today
                }
            ).Verifiable();

            _taskService.Setup(x => x.Update(It.IsAny<TaskItem>())).ReturnsAsync(false);

            var result = _tasksController.Put(1, taskItem).Result as ObjectResult;

            Assert.AreEqual(500, result.StatusCode);
        }
    }
}
