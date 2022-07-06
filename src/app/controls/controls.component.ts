import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as config from './../config/gkcontents.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input('mode') mode: config.GKMOde = config.GK_MODE;
  @Output('modeChangePreview') modeChangePreview: any = new EventEmitter();
  @Output('modeChangeEdit') modeChangeEdit: any = new EventEmitter();
  @Output('triggerSaveConfig') triggerSaveConfig: any = new EventEmitter();

  setModePreview(ev: any) {
    this.modeChangePreview.emit(ev);
  }

  setModeEdit(ev: any) {
    this.modeChangeEdit.emit(ev);
  }

  print = (ev: any): boolean => {
    this.modeChangePreview.emit(ev);

    const printContent = document.getElementsByTagName("html")[0];

    if (printContent) {
      const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');

      WindowPrt?.document.write(printContent.innerHTML);
      WindowPrt?.document.close();
      WindowPrt?.focus();
      WindowPrt?.print();
      return false;
    }

    return false;
  }

  saveConfig = (ev: any) => {
    this.triggerSaveConfig.emit(ev);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
