import { Injectable } from '@angular/core';

interface GKContentsItem {
  index: number,
  id: string,
  value: string | undefined,
  isWrapper?: boolean,
  data?: Array<GKContentsItem>
}

interface GKContentsWrapper {
  id: string,
  isWrapper: boolean,
  data: Array<GKContentsItem>,
  index?: number,
  value?: string | undefined
}

interface GKContentsInterface {
  data: Array<GKContentsItem | GKContentsWrapper>
}

const GK_CONTENTS: GKContentsInterface = {
  data: [
    {
      index: 1,
      id: 'text1',
      value: 'CHỦ TỊCH CHI HỘI NGƯỜI MẬP<br>TẠI BỜ BIỂN NGÀ'
    }, {
      index: 2,
      id: 'text2',
      value: 'TẶNG'
    }, {
      index: 3,
      id: 'text3',
      value: 'GIẤY KHEN'
    }, {
      index: 4,
      id: 'text4',
      value: 'Cháu Béo Thị Yen<br>đã có thành tích tốt trong học tập<br>năm học 2021-2022'
    }, {
      id: 'signature',
      isWrapper: true,
      data: [{
        index: 5,
        id: 'text5',
        value: 'Ngày 28 tháng 8 năm 2022'
      }, {
        index: 6,
        id: 'text6',
        value: 'CHỦ TỊCH'
      }, {
        index: 7,
        id: 'text7',
        value: 'Vũ Thị Béo'
      }]
    }, {
      index: 8,
      id: 'text8',
      value: 'Quyết định khen thưởng<br>Số 139-1 / QĐKT-HNMBBN'
    }
  ]
}

enum GKMOde {
  preview = 'preview',
  edit = 'edit'
}

const GK_MODE: GKMOde = GKMOde.preview;

const toggleGKMOde = (currentMode: GKMOde): GKMOde => {
  return currentMode == GKMOde.edit ? GKMOde.preview : GKMOde.edit;
};

export {
  GKContentsItem,
  GKContentsWrapper,
  GKContentsInterface,
  GK_CONTENTS,
  GKMOde,
  GK_MODE,
  toggleGKMOde
};
// export class GKContentsService {

//   constructor() { }
// }
