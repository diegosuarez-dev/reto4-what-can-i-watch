import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { loadResultsAction, loadGenresAction } from '../../services/redux/actions';
import Movie from '../Movie/Movie';
import Series from '../Series/Series';
import './Search.scss';