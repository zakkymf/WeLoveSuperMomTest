import XLSX from 'xlsx';
import {Alert, PermissionsAndroid} from 'react-native';
import {DownloadDirectoryPath, writeFile} from 'react-native-fs';

export default class Home {
  toLowerCase(str: string) {
    return str?.toLocaleLowerCase();
  }

  toUpperCase(str: string) {
    return str.toUpperCase();
  }

  parseString(value: string) {
    let result = '';
    for (let i = 0; i < value.length; i++) {
      if (i % 2 === 1) {
        result += value[i].toUpperCase();
      } else {
        result += value[i].toLowerCase();
      }
    }

    return result;
  }

  exportCSV(str: string) {
    let result: string = '';
    for (let i = 0; i < str.length; i++) {
      result = result.concat(str[i]);
      if (i < str.length - 1) {
        result = result.concat(',');
      }
    }

    let data = [
      {
        id: new Date(),
        result,
      },
    ];

    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'data');
    const exportData = XLSX.write(wb, {type: 'binary', bookType: 'xlsx'});

    writeFile(
      DownloadDirectoryPath + '/WeLoveSuperMom.csv',
      exportData,
      'ascii',
    )
      .then(() => {
        Alert.alert('Success', 'Export data successfully');
      })
      .catch(err => {
        Alert.alert('Error', err?.message);
      });
  }

  async checkPermission(word: string) {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ).then(result => {
        if (result === 'granted') {
          this.exportCSV(word);
        }
      });
    } catch (error) {
      return;
    }
  }
}

export const homeStore = new Home();
