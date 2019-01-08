import { Component } from '@angular/core';
import { AsciiHelperService } from './ascii-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asciiparser';
  file: any;
  result: any;

  constructor(private asciiHelperService: AsciiHelperService) {
  }

  inputFileChanged(event) {
    this.file = event.target.files[0];
    this.uploadFileToParse()
  }

  uploadFileToParse() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      // debugger
      this.result = this.asciiHelperService.parseInput(fileReader.result)
      this.result.replace('\n', '<br/>')
    }
    fileReader.readAsText(this.file)
  }
}
