import { Injectable } from "@angular/core";
import { NgbTimeAdapter, NgbTimeStruct } from "@ng-bootstrap/ng-bootstrap";

/**
 * Example of a String Time adapter
 */
@Injectable()
export class NgbTimeStringAdapter extends NgbTimeAdapter<string> {
  fromModel(value: string | null): NgbTimeStruct | null {
    if (!value) {
      return null;
    }
    const split = new Date(value);    
    return {
      hour: split.getHours(),
      minute: split.getMinutes(),
      second: split.getSeconds(),
    };
  }

  toModel(time: NgbTimeStruct | null): string | null {
    if (time != null) {
      const date = new Date();
      date.setHours(time.hour);
      date.setMinutes(time.minute);
      date.setSeconds(time.second);
      return date.toISOString();
    }
    return null;
  }
}