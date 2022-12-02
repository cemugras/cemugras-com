import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from "./about-page/about-page.component";
import { GamePageComponent } from "./game-page/game-page.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

import {TetrisGameComponent} from "./game-page/tetris-game/tetris-game.component";

const routes: Routes = [
  { path: '', component: GamePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'notfound', component: NotFoundPageComponent },
  { path: 'games/tetris', component: TetrisGameComponent},
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
