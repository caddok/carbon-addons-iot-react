import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, object, boolean } from '@storybook/addon-knobs';

import { COLORS, CARD_SIZES } from '../../constants/LayoutConstants';
import { getCardMinSize } from '../../utils/componentUtilityFunctions';
import { getIntervalChartData, chartData, generateData } from '../../utils/sample';

import TimeSeriesCard from './TimeSeriesCard';

// need a timeOffset to make the data always show up
const timeOffset = new Date().getTime() - Object.values(chartData.dataItemToMostRecentTimestamp)[0];
storiesOf('TimeSeriesCard (Experimental)', module)
  .add('medium / single line - interval hour', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    // console.log(getIntervalChartData('day', 30, { min: 10, max: 100 }, 100));
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],
            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 10, { min: 10, max: 100 }, 100)}
          interval="hour"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval day', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time t'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 10, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval hour, values hour (Same day)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('hour', 10, { min: 10, max: 100 }, 100)}
          interval="hour"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval hour, values hour (Diff day)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('hour', 24, { min: 10, max: 100 }, 100)}
          interval="hour"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval day, values day (Week Day)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 7, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval day, values day (Weeks)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 12, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval day, values month (Month Daily)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 30, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval day, values month (Same Month Daily)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 19, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval month, values month (Year Monthly/ Same Year)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('month', 5, { min: 10, max: 100 }, 100)}
          interval="month"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval month, values month (Year Monthly/ Diff Year)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('month', 12, { min: 10, max: 100 }, 100)}
          interval="month"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval hour, values hour (Same day)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('hour', 15, { min: 10, max: 100 }, 100)}
          interval="hour"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval hour, values hour (Diff day)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('hour', 32, { min: 10, max: 100 }, 100)}
          interval="hour"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval day, values day (One Week)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 7, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval day, values day (Weeks)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 24, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval day, values month (Month Daily)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 30, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval month, values month (Year Monthly/ Same Year)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('month', 6, { min: 10, max: 100 }, 100)}
          interval="month"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval month, values month (Year Monthly)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('month', 12, { min: 10, max: 100 }, 100)}
          interval="month"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })

  .add('LARGE / single line - interval day', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 30, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('multi line - no range', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Facility Metrics')}
          id="facility-multi"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                color: text('color', COLORS.PURPLE),
              },
              {
                label: 'Pressure',
                dataSourceId: 'pressure',
                color: COLORS.TEAL,
              },
            ],
            timeDataSourceId: 'timestamp',
          })}
          breakpoint="lg"
          values={chartData.events.slice(0, 20)}
          size={size}
        />
      </div>
    );
  })
  .add('single line - day', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                color: COLORS.PURPLE,
              },
            ],
            timeDataSourceId: 'timestamp',
          })}
          range="day"
          interval="hour"
          breakpoint="lg"
          // Need to update the values to have recent dates
          values={chartData.events.slice(0, 20).map(data => ({
            ...data,
            timestamp: data.timestamp + timeOffset,
          }))}
          size={size}
        />
      </div>
    );
  })
  .add('single line - week', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Pressure')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          range="week"
          interval="day"
          content={object('content', {
            series: [
              {
                label: 'Pressure',
                dataSourceId: 'pressure',
                color: COLORS.MAGENTA,
              },
            ],
            timeDataSourceId: 'timestamp',
          })}
          breakpoint="lg"
          // Need to update the values to have recent dates
          values={chartData.events.slice(0, 20).map(data => ({
            ...data,
            timestamp: data.timestamp + timeOffset,
          }))}
          size={size}
        />
      </div>
    );
  })
  .add('empty', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                color: COLORS.PURPLE,
              },
            ],
            timeDataSourceId: 'timestamp',
          })}
          range="day"
          interval="hour"
          breakpoint="lg"
          values={[]}
          size={size}
        />
      </div>
    );
  })
  .add('empty for a range', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                color: COLORS.PURPLE,
              },
            ],
            timeDataSourceId: 'timestamp',
          })}
          range="day"
          interval="hour"
          breakpoint="lg"
          values={chartData.events.slice(0, 20)}
          size={size}
        />
      </div>
    );
  });
