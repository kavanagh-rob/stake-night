import { Component, Input, OnInit } from '@angular/core';
  
import { ImageService } from '../../shared/services/image.service';
import {ChangeDetectorRef} from '@angular/core';
import { PlayerProfile } from 'src/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlayerProfileService } from 'src/app/shared/services/player-profile.service';

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-player-image-upload',
  templateUrl: './player-image-upload.component.html',
  styleUrls: ['./player-image-upload.component.css']
})
export class PlayerImageUploadComponent {

  @Input()
  playerProfile: PlayerProfile;

  imageBucketUrl= 'https://stake-night-images-staging174848-staging.s3-eu-west-1.amazonaws.com/public/';

  selectedFile: ImageSnippet;
  constructor(private ref: ChangeDetectorRef, private imageService: ImageService, private modalService: NgbModal, private playerProfileService: PlayerProfileService) {}

  openImageUploadModal(modalContent){
    this.selectedFile = null;
    this.modalService.open(modalContent, {backdropClass: 'light-blue-backdrop'});
  }

  private async onSuccess(data) {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
    let playerProfileToUpdate = await this.playerProfileService.getPlayerProfile( this.playerProfile.id);
    playerProfileToUpdate.avatorUrl = this.imageBucketUrl+data.key;
    await this.playerProfileService.updatePlayerProfile( playerProfileToUpdate);
    document.getElementById('closeImageUploadModalButton').click()
    this.ref.detectChanges();
    location.reload();
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
    this.ref.detectChanges();
  }

  stageFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = false;
    });

    reader.readAsDataURL(file);
  }

  uploadFile(){
    this.imageService.uploadImage(this.selectedFile.file, this.playerProfile).then(
      (data) => this.onSuccess(data),
      (error) => this.onError()
    );
  }
}