import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { RegisterService } from '../../registerservice/register.service';
import { FormData } from '../../model/register.model'
import { ToastrService } from 'ngx-toastr';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class RegisteruserComponent implements OnInit{
  showLogin = false;
  form!: FormGroup;
  currentStep = 1;

  constructor(private formBuilder: FormBuilder, 
    private registerService: RegisterService,
    private toastr: ToastrService) { }

  
  ngOnInit() {
  this.form = this.formBuilder.group({
    personalDetails: this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['',Validators.required]
    }),

    addressDetails: this.formBuilder.group({
        city: ['', Validators.required],
        address: ['', Validators.required],
        pincode: ['',Validators.required]
    }),

    educationalDetails: this.formBuilder.group({
        highest_qualification: ['', Validators.required],
        university: ['', Validators.required],
        total_marks: ['',Validators.required]
    })

  })
}

  get personalDetails() { return this.form.get('personalDetails') as FormGroup; }
  get name() { return this.personalDetails.get('name') as FormControl; }
  get email() { return this.personalDetails.get('email') as FormControl; }
  get phone() { return this.personalDetails.get('phone') as FormControl; }

  get addressDetails() { return this.form.get('addressDetails') as FormGroup; }
  get city() { return this.addressDetails.get('city') as FormControl; }
  get university() { return this.addressDetails.get('university') as FormControl; }
  get pincode() { return this.addressDetails.get('pincode') as FormControl; }

 
  get educationalDetails() { return this.form.get('educationalDetails') as FormGroup; }
  get highest_qualification() { return this.educationalDetails.get('highest_qualification') as FormControl; }
  get address() { return this.educationalDetails.get('address') as FormControl; }
  get total_marks() { return this.educationalDetails.get('total_marks') as FormControl; }

  nextStep() {
    this.currentStep++;
  }

  prevStep() {
    this.currentStep--;
  }
 
  onSubmit(){ 
    if(this.form.valid){
      console.log(this.form.value)
      this.registerService.UserRegister(this.form.value as FormData)
      .subscribe(
        response => {
          console.log(response);
          this.form.reset();
          this.toastr.success('Form submitted successfully!');
        },
        error => {
          console.log(error);
          this.toastr.error('An error occurred while submitting the form.');
        });
      this.currentStep = 1;
 
     }
    }

  }




