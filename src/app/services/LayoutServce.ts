import { Injectable } from '@angular/core';
import { LayoutViewTypes } from '../components/layout/LayoutViewTypes';

@Injectable()
export class LayoutService {
    private activeView: LayoutViewTypes = LayoutViewTypes.HOME;
    constructor() { }

    setView = (view: LayoutViewTypes) => this.activeView = view;
    getView = (): LayoutViewTypes => {return this.activeView}
}