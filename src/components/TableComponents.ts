import { expect, Locator, Page } from '@playwright/test';

import { BaseComponent } from '@core/BaseComponent';

export class TableComponent extends BaseComponent {

    readonly table: Locator;

    readonly headerRows: Locator;

    readonly bodyRows: Locator;

    constructor(
        page: Page,
        table: Locator
    ) {

        super(page, table);

        this.table = table;

        this.headerRows = table.locator('thead tr');

        this.bodyRows = table.locator('tbody tr');

    }


    // Row Information


    async getRowCount(): Promise<number> {
        return this.bodyRows.count();
    }

    async getColumnCount(): Promise<number> {
        return this.headerRows
            .locator('th')
            .count();
    }

    async isEmpty(): Promise<boolean> {
        return (await this.getRowCount()) === 0;
    }


    // Headers


    async getHeaders(): Promise<string[]> {

        return this.headerRows
            .locator('th')
            .allTextContents();

    }

    async verifyHeader(
        expected: string
    ): Promise<void> {

        await expect(
            this.headerRows
        ).toContainText(expected);

    }


    // Rows


    async getRow(
        index: number
    ): Promise<Locator> {

        return this.bodyRows.nth(index);

    }

    async getCellText(
        row: number,
        column: number
    ): Promise<string> {

        return (
            await this.bodyRows
                .nth(row)
                .locator('td')
                .nth(column)
                .textContent()
        )?.trim() ?? '';

    }


    // Search


    async contains(
        text: string
    ): Promise<boolean> {

        return await this.table
            .getByText(text, {
                exact: true
            })
            .isVisible();

    }

    async verifyContains(
        text: string
    ): Promise<void> {

        await expect(
            this.table.getByText(text)
        ).toBeVisible();

    }


    // Find Row

    async findRow(
        text: string
    ): Promise<Locator> {

        const rows =
            await this.bodyRows.count();

        for (
            let i = 0;
            i < rows;
            i++
        ) {

            const row =
                this.bodyRows.nth(i);

            if (
                await row.getByText(
                    text,
                    {
                        exact: true
                    }
                ).isVisible()
            ) {

                return row;

            }

        }

        throw new Error(
            `Row not found: ${text}`
        );

    }


    // Row Actions


    async clickEdit(
        rowText: string
    ): Promise<void> {

        const row =
            await this.findRow(rowText);

        await row
            .locator(
                'button'
            )
            .nth(0)
            .click();

    }

    async clickDelete(
        rowText: string
    ): Promise<void> {

        const row =
            await this.findRow(rowText);

        await row
            .locator(
                'button'
            )
            .nth(1)
            .click();

    }


    // Verification
    async verifyVisible(): Promise<void> {

        await this.expectVisible(
            this.table
        );

    }

}