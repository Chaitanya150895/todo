import { Component,OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { ListComponent } from 'src/app/list/list.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild('child',null) child:ListComponent;

  formData = [
    {for : "name",control:"input" , type:"text",label:"Add",placeholder:"Enter Name", id:"name",control_name:"name"},
    { for: "action", control: "button", type: "submit", label: "Action", placeholder: "button", id: "action", control_name: "action" },
  ]

  customForm = this.fb.group({

    name: ['']
  });

  constructor(private fb:FormBuilder, private httpService: HttpService) { }
  ngOnInit() { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.customForm.value);
    console.log("submit :: add:::" + this.customForm.value.add)
    this.httpService.postHttp("stuffs.json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.customForm.reset();
        
        this.child.reloadData();
      });
  }
}
