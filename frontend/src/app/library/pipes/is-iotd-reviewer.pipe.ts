import { Pipe, PipeTransform } from "@angular/core";
import { UserProfileModel } from "../models/common/userprofile.model";

@Pipe({
  name: "isIotdReviewer",
})
export class IsIotdReviewerPipe implements PipeTransform {
  transform(value: UserProfileModel, args?: any): any {
    if (!value.userObject) {
      return false;
    }
    return value.userObject.isInGroup("iotd_reviewers");
  }
}
