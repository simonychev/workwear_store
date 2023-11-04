import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseType} from "../../../types/response.type";
import {ErrorType} from "../../../types/error.type";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getTelegram(name: string, phone: string, email: string,  comment: string): Observable<ResponseType | ErrorType> {
    return this.http.get<ResponseType | ErrorType>('https://api.telegram.org/bot5541879256:AAGMUIhbfdD6ypl5jkCPy8F_dFLmY4oWjrA/sendMessage?chat_id=-964836101&parse_mode=html&text=' + 'Имя: ' + name + ', email: ' + email + ', Телефон: ' + phone + ', Комментарий: ' + comment)
  }

  getTelegramFooter(name: string, phone: string): Observable<ResponseType | ErrorType> {
    return this.http.get<ResponseType | ErrorType>('https://api.telegram.org/bot5541879256:AAGMUIhbfdD6ypl5jkCPy8F_dFLmY4oWjrA/sendMessage?chat_id=-964836101&parse_mode=html&text=' + 'Имя: ' + name + ', Телефон: ' + phone)
  }
}
