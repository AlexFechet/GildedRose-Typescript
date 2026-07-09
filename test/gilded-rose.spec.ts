import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Sulfuras when day is 0', function () {

    it('should be immutable', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Sulfuras, Hand of Ragnaros', 0, 0)
    ])});

});

describe('Sulfuras on normal day', function () {

    it('should be immutable', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 1, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Sulfuras, Hand of Ragnaros', 1, 10)
        ])});

});

describe('Sulfuras when quality is 0', function () {

    it('should be immutable', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 20, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Sulfuras, Hand of Ragnaros', 20, 0)
        ])});

});

describe('Backstage object when the number of days is greater than 0', function () {

    it('should be +1', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 20, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Backstage passes to a TAFKAL80ETC concert', 19, 2)
        ])});

});

describe('Backstage object when number of days in betwwen 5 and 10 days', function () {

    it('should be +2', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Backstage passes to a TAFKAL80ETC concert', 9, 3)
        ])});

});

describe('Backstage object when number of days is less than 5', function () {

    it('should be +3', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 4)
        ])});

});

describe('Backstage object then number of days in neagative', function () {

    it('should be 0', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0)
        ])});

});

describe('Backstage when quality is over 50', function () {

    it('should be 0', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 2, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50)
        ])});

});

describe('Brie when quality in under 50', function () {

    it('should be +1', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 1, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Aged Brie', 0, 2)
        ])});

});

describe('Brie when quality is over 50', function () {

    it('should be 50', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Aged Brie', -1, 50)
        ])});

});

describe('normal object when quality id over 0', function () {

    it('should be -1', function() {
        const gildedRose = new GildedRose([ new Item('gigel', 1, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('gigel', 0, 0)
        ])});

});
describe('normal object when number of days is negative', function () {

    it('should be -2', function() {
        const gildedRose = new GildedRose([ new Item('gigel', -1, 4) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('gigel', -2, 2)
        ])});

});

describe('normal object when quality is under 0', function () {

    it('should be 0', function() {
        const gildedRose = new GildedRose([ new Item('gigel', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('gigel', -1, 0)
        ])});

});

describe('conjured object when quality is over 0', function () {

    it('should be -2', function() {
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 1, 4) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Conjured Mana Cake', 0, 2)
        ])});

});

describe('conjured object when days is 0', function () {

    it('should be -4', function() {
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 0, 4) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Conjured Mana Cake', -1, 0)
        ])});

});

describe('conjured object when quality is under 0', function () {

    it('should be -4', function() {
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 0, 3) ]);
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal([
            new Item('Conjured Mana Cake', -1, 0)
        ])});

});


