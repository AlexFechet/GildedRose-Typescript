import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('single day', function () {

    it('should foo2', function() {
        const gildedRose = new GildedRose([
            new Item('foo', 3, 0),
            new Item('Aged Brie', 15, 0),
            new Item('Sulfuras, Hand of Ragnaros', 2, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 20, 15),
            new Item('maria', 0, 3),
            new Item('item2', 15, 0),
            new Item('item3', 0, 15),
            new Item('item4', -2, 0),
            new Item('item5', 0, 0),
        ]);
        const items = gildedRose.updateQuality();

        expect(items).to.deep.equal([
            new Item('foo', 2, 0),
            new Item('Aged Brie', 14, 1),
            new Item('Sulfuras, Hand of Ragnaros', 2, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 19, 16),
            new Item('maria', -1, 1),
            new Item('item2', 14, 0),
            new Item('item3', -1, 13),
            new Item('item4', -3, 0),
            new Item('item5', -1, 0),
        ]);
    });

});

describe('multiple days', function () {

    it('should foo2', function() {
        const gildedRose = new GildedRose([
            new Item('foo', 3, 0),
            new Item('Aged Brie', 15, 0),
            new Item('Sulfuras, Hand of Ragnaros', 2, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 20, 15),
            new Item('maria', 0, 3),
            new Item('item2', 15, 0),
            new Item('item3', 0, 15),
            new Item('item4', -2, 0),
            new Item('item5', 0, 0),

        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();

        expect(items).to.deep.equal([
            new Item('foo', -1, 0),
            new Item('Aged Brie', 11, 4),
            new Item('Sulfuras, Hand of Ragnaros', 2, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 16, 19),
            new Item('maria', -4, 0),
            new Item('item2', 11, 0),
            new Item('item3', -4, 7),
            new Item('item4', -6, 0),
            new Item('item5', -4, 0),
        ]);
    });

});
