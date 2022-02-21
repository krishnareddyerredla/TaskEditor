using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using TaskEditorApi.Core.Entities;
using TaskEditorApi.Core.Interfaces;
using TaskEditorApi.Core.Services;
using TaskEditorApi.Dal.Data;
using TaskEditorApi.Dal.Data.Context;
using TaskEditorApi.Extensions;
using TaskEditorApi.Models;

namespace TaskEditorApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddMvc()
                .AddMvcOptions(o => o.OutputFormatters.Add(
                    new XmlDataContractSerializerOutputFormatter()));
            //services.AddCors();

            services.AddCors(o => o.AddPolicy("AllowAnyOriginPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            }));

            var connectionString = Configuration["connectionStrings:taskEditorDBConnectionString"];
            services.AddDbContext<TaskEditorContext>(o => o.UseSqlServer(connectionString));

            services.AddTransient<ITaskItemRepository, TaskItemRepository>();
            services.AddTransient<ITaskItemService, TaskItemService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, TaskEditorContext taskEditorContext)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler();
            }

            taskEditorContext.SeedDataForContext();

            app.UseStatusCodePages();

            AutoMapper.Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<TaskItem, TaskItemDto>();
                cfg.CreateMap<TaskItemCreateDto, TaskItem>();
                cfg.CreateMap<TaskItemUpdateDto, TaskItem>();
            });

            app.UseCors("AllowAnyOriginPolicy");

            app.UseMvc();
        }
    }
}
