import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class SbService {
    sbToggled: boolean;

    constructor() {}

    intitMenu(): MenuItem[] {
        return [
            {
                label: 'File',
                icon: 'pi pi-pw pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [{ label: 'User', icon: 'pi pi-fw pi-user-plus' }, { label: 'Filter', icon: 'pi pi-fw pi-filter' }]
                    },
                    { label: 'Open', icon: 'pi pi-fw pi-external-link' },
                    { separator: true },
                    { label: 'Quit', icon: 'pi pi-fw pi-times' }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [{ label: 'Delete', icon: 'pi pi-fw pi-trash' }, { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents',
                        icon: 'pi pi-pi pi-bars'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-pi pi-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'User',
                                icon: 'pi pi-fw pi-file'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [{ label: 'Save', icon: 'pi pi-fw pi-save' }, { label: 'Update', icon: 'pi pi-fw pi-save' }]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [{ label: 'Delete', icon: 'pi pi-fw pi-minus' }]
                    }
                ]
            },
            {
                label: 'Entities',
                icon: 'pi pi-fw pi-table',
                items: [
                    {
                        label: 'Category',
                        icon: 'pi pi-pi pi-bars'
                    },
                    {
                        label: 'Product',
                        icon: 'pi pi-pi pi-search'
                    },
                    {
                        label: 'Customer',
                        icon: 'pi pi-pi pi-search'
                    },
                    {
                        label: 'Address',
                        icon: 'pi pi-pi pi-search'
                    },
                    {
                        label: 'Wish List',
                        icon: 'pi pi-pi pi-search',
                        routerLink: ['/', 'wish-list']
                    }
                ]
            }
        ];
    }

    toggleSbar() {
        this.sbToggled = !this.sbToggled;
    }
}
