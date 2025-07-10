// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideHttpClient } from '@angular/common/http';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { provideForm } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter([]),
//     provideHttpClient(),
//     provideAnimations(),
//     provideForm(), // ✅
//   ],
// };
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(FormsModule), // ✅ correct way to provide FormsModule
  ],
};
