
Instructions to build and run Task Editor Application,

1. The TaskEditorApi has been written using .net core 2.2 and EntityFramework. Please install .net core SDK 2.2 to run the API inside Visual Studio.
2. The database will be automatically created by Database Migrations in local DB upon running the API for the first time.
3. Open the solution file TaskEditorApi.sln in Visual Studio and click on start to launch the API. The url in the format http://localhost:50317/api/tasks will be launched in Browser.
4. If the generated API url is different from the one mentioned in step 3 then please copy this url and paste it in ..\TaskEditor\TaskEditorClient\src\environments for the apiUrl value in 
   environment.ts and environment.prod.ts files
5. The TaskEditorClient has been written in Angular 7 and Bootstrap.
6. Please run ng serve to launch the client application. The client url is of format http://localhost:4200/tasks


