import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { TaskItem } from '../models/taskitem';
import { TaskItemCreate } from '../models/task-item-create';
import { TaskItemUpdate } from '../models/task-item-update';
import { environment } from '../../environments/environment';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class TaskitemserviceService {
 baseUrl:string=environment.apiUrl;

  taskItems: TaskItem[];
  headers:Headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private _http: Http) { }

  getTaskItems(): Observable<TaskItem[]> {
    return this._http.get(this.baseUrl+'/api/tasks')
      .map(res => res.json())
      .catch(this.handleErrorObservable);
  }

  createTaskItem(taskItem:TaskItemCreate): Observable<TaskItem> {
    return this._http.post(this.baseUrl+'/api/tasks', JSON.stringify(taskItem), {headers:this.headers})
      .map(res => res.json())
      .catch(this.handleErrorObservable);
  }

  updateTaskItem(taskItem:TaskItemUpdate,taskId:number): Observable<any> {
    return this._http.put(this.baseUrl+'/api/tasks/'+taskId, JSON.stringify(taskItem), {headers:this.headers})
      .map(res => res.json())
      .catch(this.handleErrorObservable);
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

 
}
