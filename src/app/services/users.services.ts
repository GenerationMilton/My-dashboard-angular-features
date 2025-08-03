import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UsersResponse } from '@interfaces/req-response';
import { delay } from 'rxjs';
import { environment } from '../../enviroments/environment.development';

interface State {
    users: User[];
    loading: boolean;
}

@Injectable({
        providedIn: 'root'
    })
export class UsersService {

    private http = inject( HttpClient );


    #state = signal<State>({
         loading: true,
         users: [],
    });

    public users = computed(()=>this.#state().users );
    public loading = computed(()=>this.#state().loading );

    constructor() {
        // console.log('Cargando data');
        this.http.get<UsersResponse>(`${environment.userUrl}/users`,{
            params: {
                api_key: environment.apiKey
            }
        })
        .pipe( delay(1500))
        .subscribe( rest =>{

            this.#state.set({
                loading: false,
                users: rest.data,
            })
        })
     }
    
}
