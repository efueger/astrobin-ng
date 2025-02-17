import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IsContentModeratorPipe } from "./is-content-moderator.pipe";
import { IsImageModeratorPipe } from "./is-image-moderator.pipe";
import { IsIotdJudgePipe } from "./is-iotd-judge.pipe";
import { IsIotdReviewerPipe } from "./is-iotd-reviewer.pipe";
import { IsIotdStaffPipe } from "./is-iotd-staff.pipe";
import { IsIotdSubmitterPipe } from "./is-iotd-submitter.pipe";
import { IsProducerPipe } from "./is-producer.pipe";
import { IsRetailerPipe } from "./is-retailer.pipe";
import { IsSuperuserPipe } from "./is-superuser.pipe";
import { EnsureUrlProtocolPipe } from "./ensure-url-protocol.pipe";

@NgModule({
  declarations: [
    EnsureUrlProtocolPipe,
    IsContentModeratorPipe,
    IsImageModeratorPipe,
    IsIotdJudgePipe,
    IsIotdReviewerPipe,
    IsIotdStaffPipe,
    IsIotdSubmitterPipe,
    IsProducerPipe,
    IsRetailerPipe,
    IsSuperuserPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EnsureUrlProtocolPipe,
    IsContentModeratorPipe,
    IsImageModeratorPipe,
    IsIotdJudgePipe,
    IsIotdReviewerPipe,
    IsIotdStaffPipe,
    IsIotdSubmitterPipe,
    IsProducerPipe,
    IsRetailerPipe,
    IsSuperuserPipe,
  ],
})
export class PipesModule {
}
