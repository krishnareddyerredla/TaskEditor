using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TaskEditorApi.Core.Entities;
using TaskEditorApi.Core.Interfaces;
using TaskEditorApi.Models;

namespace TaskEditorApi.Controllers
{
    [Route("api/tasks")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly ITaskItemService _taskItemService;

        public TasksController(ITaskItemService taskItemService)
        {
            _taskItemService = taskItemService;
        }

        /// <summary>
        /// Gets all Task Items
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var taskItems = await _taskItemService.GetAll();

            return  Ok(Mapper.Map<IEnumerable<TaskItemDto>>(taskItems));
        }

        /// <summary>
        /// Gets Task Item By Task ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}",Name = "GetById")]
        public async Task<IActionResult> GetById(int id)
        {
            var taskItem = await _taskItemService.GetById(id);

            if (taskItem == null)
            {
                return NotFound();
            }

            //Map Entity to DTO
            var taskItemDto = Mapper.Map<TaskItemDto>(taskItem);

            return Ok(taskItemDto);
        }

        /// <summary>
        /// Creates Task Item
        /// </summary>
        /// <param name="taskItemCreateDto"></param>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] TaskItemCreateDto taskItemCreateDto)
        {
            if (taskItemCreateDto == null)
            {
                return BadRequest();
            }
            
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var taskItem = Mapper.Map<TaskItem>(taskItemCreateDto);

            await _taskItemService.Add(taskItem);
            
            var createdTaskItem = Mapper.Map<TaskItemDto>(taskItem);

            return CreatedAtRoute("GetById", new {id = taskItem.TaskId},
                createdTaskItem);

        }

        /// <summary>
        /// Updates task item values
        /// </summary>
        /// <param name="id"></param>
        /// <param name="taskItemUpdateDto"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] TaskItemUpdateDto taskItemUpdateDto)
        {
            if (taskItemUpdateDto == null)
            {
                return BadRequest();
            }
            

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var taskItem = await _taskItemService.GetById(id);
            if (taskItem == null)
            {
                return NotFound();
            }

             Mapper.Map(taskItemUpdateDto, taskItem);

            if (!await _taskItemService.Update(taskItem)) 
            {
                return StatusCode(500, "A problem happened while handling your request.");
            }

            return NoContent();
        }

    }
}
