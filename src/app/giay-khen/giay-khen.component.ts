import { Component, OnInit } from '@angular/core';
import * as config from './../config/gkcontents.service';

@Component({
  selector: 'app-giay-khen',
  templateUrl: './giay-khen.component.html',
  styleUrls: ['./giay-khen.component.scss']
})
export class GiayKhenComponent implements OnInit {
  contentsStored: string|null = localStorage.getItem('GIAY_KHEN');
  contents: config.GKContentsInterface = this.contentsStored ? JSON.parse(this.contentsStored) : config.GK_CONTENTS;
  contentsTemp: any = this.contentsStored ? JSON.parse(this.contentsStored) : config.GK_CONTENTS;
  contentsEditor: string|undefined;
  contentsEditorIndex: number|undefined;
  mode: config.GKMOde = config.GK_MODE;

  editContent = (ev: any, item: config.GKContentsItem | config.GKContentsWrapper) => {
    ev.preventDefault();

    this.contentsEditor = item.value;
    this.contentsEditorIndex = item.index;
  };

  onContentsEditorChange = () => {
    for (let i = 0; i < this.contents.data.length; i++) {
      let tempItem: config.GKContentsItem | config.GKContentsWrapper = this.contents.data[i];

      if (typeof this.contents.data[i].isWrapper != 'undefined' && typeof this.contents.data[i].data != 'undefined') {
        for (let j = 0; j < this.contents.data[i].data!.length; j++) {
          if (this.contents.data?.[i]?.data?.[j]?.index == this.contentsEditorIndex) {
            if (typeof this.contentsEditorIndex != 'undefined' && typeof this.contentsEditor != 'undefined') {
              let tempEl = document.querySelector('[data-index="' + this.contentsEditorIndex + '"]');
              tempEl!.innerHTML = this.contentsEditor;

              if (this.contentsTemp) {
                this.contentsTemp.data[i].data[j].value = this.contentsEditor;
              }

              return;
            }
          }
        }
      } else if (tempItem.index == this.contentsEditorIndex) {
        this.contents.data[i].value = this.contentsEditor;

        if (this.contentsTemp) {
          this.contentsTemp.data[i].value = this.contentsEditor;
        }

        return;
      }
    }
  };

  modeSetPreview = () => {
    this.mode = config.GKMOde.preview;
  }

  modeSetEdit = () => {
    this.mode = config.GKMOde.edit;
  }

  saveConfig = () => {
    localStorage.setItem('GIAY_KHEN', JSON.stringify(this.contentsTemp));
  }

  ngOnInit(): void {
  }

}
