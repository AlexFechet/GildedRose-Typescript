import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

});

describe('Sulfuras_day0', function () {

    it('should be immutable', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Sulfuras, Hand of Ragnaros', 0, 0)
    ])});

});

describe('Sulfuras_normal', function () {

    it('should be immutable', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 1, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Sulfuras, Hand of Ragnaros', 1, 10)
        ])});

});

describe('Sulfuras_quality0', function () {

    it('should be immutable', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 20, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Sulfuras, Hand of Ragnaros', 20, 0)
        ])});

});

describe('Backstage_gr10', function () {

    it('should be +1', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 20, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Backstage passes to a TAFKAL80ETC concert', 19, 2)
        ])});

});

describe('Backstage_5..10', function () {

    it('should be +2', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Backstage passes to a TAFKAL80ETC concert', 9, 3)
        ])});

});

describe('Backstage_0..5', function () {

    it('should be +3', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 4)
        ])});

});

describe('Backstage_ls0', function () {

    it('should be 0', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0)
        ])});

});

describe('Backstage_quality_over50', function () {

    it('should be 0', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 2, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50)
        ])});

});

describe('Brie_u50', function () {

    it('should be +1', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 1, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Aged Brie', 0, 2)
        ])});

});

describe('Brie_o50', function () {

    it('should be 50', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Aged Brie', -1, 50)
        ])});

});

describe('normal_quality_over0', function () {

    it('should be -1', function() {
        const gildedRose = new GildedRose([ new Item('gigel', 1, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('gigel', 0, 0)
        ])});

});
describe('normal_double_decress', function () {

    it('should be -2', function() {
        const gildedRose = new GildedRose([ new Item('gigel', -1, 4) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('gigel', -2, 2)
        ])});

});

describe('normal_quality_under0', function () {

    it('should be 0', function() {
        const gildedRose = new GildedRose([ new Item('gigel', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('gigel', -1, 0)
        ])});

});


