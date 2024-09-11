import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// This is the starting point of our application
// We are bootstrapping your main component with a specific config
// basically we want to run out application with a specific config
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
