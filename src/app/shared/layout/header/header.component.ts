import {Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import { ResponseType } from 'src/types/response.type';
import { ErrorType } from 'src/types/error.type';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private dialog: MatDialog,
              private fb: FormBuilder,
              private postService: PostService,
              private snackBar: MatSnackBar){
  }

  popupForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^([А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?$/)]],
    email: ['', [Validators.required, Validators.pattern(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/)]],
    phone: ['', [Validators.required, Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,}$/)]],
    comment: ['', Validators.required]
  })

  @ViewChild('popup') popup!: TemplateRef<ElementRef>;

  products = [
    {
      title: 'Cпецодежда',
      link: '/workwear'
    },
    {
      title: 'Спецобувь',
      link: '/shoes'
    },
    {
      title: 'Защита для рук',
      link: '/gloves'
    },
    {
      title: 'Хозинвентарь',
      link: '/inventory'
    },
    // {
    //   title: 'СИЗ',
    //   link: '/'
    // },

  ]

  dialogRef: MatDialogRef<any> | null = null;

  isMenu: boolean = false;

  openPopup() {
    this.dialogRef = this.dialog.open(this.popup);
  }

  closePopup() {
    this.dialogRef?.close();
    this.popupForm.reset();
  }

  openMenu() {
    this.isMenu = !this.isMenu;
  }

  getMail() {
    if (this.popupForm.value.name, this.popupForm.value.email, this.popupForm.value.phone, this.popupForm.value.comment) {
      this.postService.getTelegram(this.popupForm.value.name as string, this.popupForm.value.phone as string, this.popupForm.value.email as string, this.popupForm.value.comment as string)
        .subscribe((data: ResponseType | ErrorType) => {
          if (data as ResponseType) {
            this.dialogRef?.close();
            this.snackBar.open('Спасибо, за заявку! Наш менеджер скоро свяжется с вами.', '', {
              duration: 3000});
              this.popupForm.reset();
          } else {
            this.dialogRef?.close();
            this.snackBar.open('Произошла ошибка! Попробуйте еще раз.', '', {
              duration: 3000});
              this.popupForm.reset();
          }
        })
    }
  }
}
