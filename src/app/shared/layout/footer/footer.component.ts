import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import { ResponseType } from 'src/types/response.type';
import { ErrorType } from 'src/types/error.type';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private fb: FormBuilder,
    private postService: PostService,
    private snackBar: MatSnackBar) {
  }

  footerForm = this.fb.group({
    names: ['', [Validators.required, Validators.pattern(/^([А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?$/)]],   
    phones: ['', [Validators.required, Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,}$/)]],    
  })

  getMailFooter() {
    if (this.footerForm.value.names, this.footerForm.value.phones) {
      this.postService.getTelegramFooter(this.footerForm.value.names as string, this.footerForm.value.phones as string)
        .subscribe((data: ResponseType | ErrorType) => {
          if (data as ResponseType) { 
            this.snackBar.open('Спасибо, за заявку! Наш менеджер скоро свяжется с вами.', '', {
              duration: 3000});
              this.footerForm.reset();
          } else {            
            this.snackBar.open('Произошла ошибка! Попробуйте еще раз.', '', {
              duration: 3000});
              this.footerForm.reset();
          }
        })
    }
  }
}
